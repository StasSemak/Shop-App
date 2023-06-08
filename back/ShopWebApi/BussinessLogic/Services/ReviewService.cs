using AutoMapper;
using BussinessLogic.DTOs.Review;
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
    public class ReviewService : IReviewService
    {
        private readonly ShopDbContext context;
        private readonly IMapper mapper;

        public ReviewService(ShopDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public async Task<ReviewItemDto> GetAsync(int id)
        {
            var review = await context.Reviews
                .Where(x => x.IsDelete == false)
                .Where(x => x.Id == id)
                .Include(x => x.User)
                .SingleOrDefaultAsync();
            if (review == null) throw new Exception("Review not found!");

            return mapper.Map<ReviewItemDto>(review);
        }

        public async Task<ICollection<ReviewItemDto>> GetByProductAsync(int productId)
        {
            var reviews = await context.Reviews
                .Where(x => x.IsDelete == false)
                .Where(x => x.ProductId == productId)
                .Include(x => x.User)
                .ToListAsync();
            return mapper.Map<List<ReviewItemDto>>(reviews);
        }

        public async Task<ReviewItemDto> CreateAsync(ReviewCreateDto model)
        {
            var review = mapper.Map<Review>(model);

            await context.Reviews.AddAsync(review);
            await context.SaveChangesAsync();

            await UpdateRating(model.ProductId);

            return mapper.Map<ReviewItemDto>(review);
        }

        private async Task UpdateRating(int productId)
        {
            var product = await context.Products
                .Where(x => x.IsDelete == false)
                .Where(x => x.Id == productId)
                .SingleOrDefaultAsync();
            if (product == null) throw new Exception("Review product not found!");

            var reviews = await context.Reviews
                .Where(x => x.IsDelete == false)
                .Where(x => x.ProductId == product.Id)
                .ToListAsync();

            double newRating = reviews.Sum(x => x.Mark) / (double)reviews.Count;

            product.Rating = newRating;

            context.Products.Update(product);
            await context.SaveChangesAsync();
        }

        public async Task<ReviewItemDto> UpdateAsync(ReviewUpdateDto model)
        {
            var review = await context.Reviews
                .Where(x => x.IsDelete == false)
                .Where(x => x.Id == model.Id)
                .Include(x => x.User)
                .SingleOrDefaultAsync();
            if (review == null) throw new Exception("Review not found!");

            review.Text = model.Text;
            review.Mark = model.Mark;
            review.Date = DateTime.UtcNow;

            context.Reviews.Update(review);
            await context.SaveChangesAsync();

            return mapper.Map<ReviewItemDto>(review);
        }

        public async Task DeleteAsync(int id)
        {
            var review = await context.Reviews
                .Where(x => x.IsDelete == false)
                .Where(x => x.Id == id)
                .SingleOrDefaultAsync();
            if (review == null) throw new Exception("Review not found!");

            review.IsDelete = true;

            context.Reviews.Update(review);
            await context.SaveChangesAsync();
        }
    }
}
