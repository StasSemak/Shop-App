using AutoMapper;
using BussinessLogic.DTOs.Product;
using BussinessLogic.Helpers;
using BussinessLogic.Interfaces;
using Data.Data;
using Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLogic.Services
{
    public class ProductService : IProductService
    {
        private readonly ShopDbContext context;
        private readonly IMapper mapper;

        public ProductService(ShopDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public async Task<ProductItemDto> GetAsync(int id)
        {
            var product = await context.Products
                .Where(x => x.IsDelete == false)
                .Where(x => x.Id == id)
                .Include(x => x.Category)
                .SingleOrDefaultAsync();
            if (product == null) throw new Exception("Product not found!");
            return mapper.Map<ProductItemDto>(product);
        }

        public async Task<ICollection<ProductItemDto>> GetAllAsync()
        {
            var products = await context.Products
                .Where(x => x.IsDelete == false)
                .Include(x => x.Category)
                .ToListAsync();
            return mapper.Map<List<ProductItemDto>>(products);
        }

        public async Task<ProductItemDto> CreateAsync(ProductCreateDto model)
        {
            var product = mapper.Map<Product>(model);
            var category = await context.Categories
                .Where(x => x.IsDelete == false)
                .Where(x => x.Id == model.CategoryId)
                .SingleOrDefaultAsync();
            if (category == null) throw new Exception("Product category not found!");
            product.CategoryId = category.Id;
            product.Image = ImageWorker.SaveImage(model.ImageBase64);

            await context.Products.AddAsync(product);
            await context.SaveChangesAsync();

            return mapper.Map<ProductItemDto>(product);
        }

        public async Task<ProductItemDto> UpdateAsync(ProductUpdateDto model)
        {
            var product = await context.Products
                .Where(x => x.IsDelete == false)
                .Where(x => x.Id == model.Id)
                .SingleOrDefaultAsync();
            if (product == null) throw new Exception("Product not found!");

            product.Name = model.Name;
            product.Description = model.Description;
            product.Price = model.Price;
            if (!string.IsNullOrWhiteSpace(model.ImageBase64))
            {
                ImageWorker.RemoveImage(product.Image);
                product.Image = ImageWorker.SaveImage(model.ImageBase64);
            }
            if (product.CategoryId != model.CategoryId)
            {
                var category = await context.Categories
                    .Where(x => x.IsDelete == false)
                    .Where(x => x.Id == model.CategoryId)
                    .SingleOrDefaultAsync();
                if (category == null) throw new Exception("New category not found!");
                product.CategoryId = category.Id;
            }

            context.Products.Update(product);
            await context.SaveChangesAsync();

            return mapper.Map<ProductItemDto>(product);
        }

        public async Task DeleteAsync(int id)
        {
            var product = await context.Products
                .Where(x => x.IsDelete == false)
                .Where(x => x.Id == id)
                .SingleOrDefaultAsync();
            if (product == null) throw new Exception("Product not found!");
            product.IsDelete = true;

            context.Products.Update(product);
            await context.SaveChangesAsync();
        }

        public async Task<ICollection<ProductItemDto>> GetByCategory(int id)
        {
            var products = await context.Products
                .Where(x => x.IsDelete == false)
                .Where(x => x.CategoryId == id)
                .Include(x => x.Category)
                .ToListAsync();
            return mapper.Map<List<ProductItemDto>>(products);
        }

        public async Task<ICollection<ProductItemDto>> GetBySearchRequest(ProductSearchDto model)
        {
            var query = context.Products
                .Where(x => x.IsDelete == false)
                .Where(x => x.Name.Contains(model.Name))
                .Where(x => x.Price > model.MinPrice);
            if (model.MaxPrice != 0) query = query.Where(x => x.Price < model.MaxPrice);
            if (model.CategoryId != 0) query = query.Where(x => x.CategoryId == model.CategoryId);
            
            var products = await query
                .Include(x => x.Category)
                .ToListAsync();

            return mapper.Map<List<ProductItemDto>>(products);
        }
    }
}
