using AutoMapper;
using AutoMapper.Configuration.Annotations;
using BussinessLogic.DTOs.Basket;
using BussinessLogic.DTOs.Product;
using BussinessLogic.Interfaces;
using Data.Data;
using Data.Models;
using Data.Models.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLogic.Services
{
    public class BasketService : IBasketService
    {
        private readonly ShopDbContext context;
        private readonly IMapper mapper;

        public BasketService(ShopDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public async Task<Basket> GetBasket(int userId)
        {
            var basket = await context.Baskets
                .Where(x => x.UserId == userId)
                .SingleOrDefaultAsync();
            return basket;
        }

        public async Task Create(int userId)
        {
            var basket = new Basket { UserId = userId };

            await context.Baskets.AddAsync(basket);
            await context.SaveChangesAsync();
        }

        public async Task<List<BasketItemDto>> Get(int userId)
        {
            var basket = await GetBasket(userId);
            if(basket == null)
            {
                Create(userId).Wait();
                basket = await GetBasket(userId);
            }
            var basketProducts = context.BasketProducts
                .Where(x => x.BasketId == basket.Id);

            var basketItems = new List<BasketItemDto>();
            var bpList = basketProducts.ToList();
            foreach (var basketProduct in bpList)
            {
                var product = await context.Products
                    .Where(x => x.IsDelete == false)
                    .Where(x => x.Id == basketProduct.ProductId)
                    .SingleOrDefaultAsync();

                var basketItem = new BasketItemDto()
                {
                    Count = basketProduct.Count,
                    Image = product.Image,
                    Name = product.Name,
                    ProductId = product.Id,
                    Price = product.Price
                };

                basketItems.Add(basketItem);
            }

            return basketItems;
        }

        public async Task AddProduct(int userId, int productId)
        {
            var basket = await GetBasket(userId);

            var basketProduct = new BasketProduct() { BasketId = basket.Id, ProductId = productId };

            await context.BasketProducts.AddAsync(basketProduct);
            await context.SaveChangesAsync();
        }

        public async Task RemoveProduct(int userId, int productId)
        {
            var basket = await GetBasket(userId);
            var basketProduct = await context.BasketProducts
                .Where(x => x.ProductId == productId)
                .Where(x => x.BasketId == basket.Id)
                .SingleOrDefaultAsync();
            
            context.BasketProducts.Remove(basketProduct);
            await context.SaveChangesAsync();
        }

        public async Task Update(BasketUpdateDto model)
        {
            var basket = await GetBasket(model.UserId);
            foreach (var product in model.Products)
            {
                var basketProduct = await context.BasketProducts
                    .Where(x => x.BasketId == basket.Id)
                    .Where(x => x.ProductId == product.ProductId)
                    .SingleOrDefaultAsync();
                basketProduct.Count = product.Count;
                context.BasketProducts.Update(basketProduct);
            }
            await context.SaveChangesAsync();
        }
    }
}
