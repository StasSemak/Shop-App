using AutoMapper;
using AutoMapper.Configuration.Annotations;
using BussinessLogic.DTOs.Category;
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
    public class CategoryService : ICategoryService
    {
        private readonly ShopDbContext context;
        private readonly IMapper mapper;

        public CategoryService(ShopDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public async Task<CategoryItemDto> GetAsync(int id)
        {
            var category = await context.Categories
                .Where(x => x.IsDelete == false)
                .Where(x => x.Id == id)
                .SingleOrDefaultAsync();

            if (category == null) throw new Exception("Category not found!");
            return mapper.Map<CategoryItemDto>(category);
        }

        public async Task<ICollection<CategoryItemDto>> GetAllAsync()
        {
            var categories = await context.Categories
                .Where(x => x.IsDelete == false)
                .ToListAsync();
            return mapper.Map<List<CategoryItemDto>>(categories);
        }

        public async Task<CategoryItemDto> CreateAsync(CategoryCreateDto model)
        {
            var category = mapper.Map<Category>(model);
            category.Image = ImageWorker.SaveImage(model.ImageBase64);

            await context.Categories.AddAsync(category);
            await context.SaveChangesAsync();

            return mapper.Map<CategoryItemDto>(category);
        }

        public async Task<CategoryItemDto> UpdateAsync(CategoryUpdateDto model)
        {
            var category = await context.Categories
                .Where(x => x.IsDelete == false)
                .Where(x => x.Id == model.Id)
                .SingleOrDefaultAsync();
            if (category == null) throw new Exception("Category not found!");

            category.Name = model.Name; 
            category.Description = model.Description;

            if (!string.IsNullOrWhiteSpace(model.ImageBase64))
            {
                ImageWorker.RemoveImage(category.Image);
                category.Image = ImageWorker.SaveImage(model.ImageBase64);
            }

            context.Categories.Update(category);
            await context.SaveChangesAsync();

            return mapper.Map<CategoryItemDto>(category);
        }

        public async Task DeleteAsync(int id)
        {
            var category = await context.Categories
                .Where(x => x.IsDelete == false)
                .Where(x => x.Id == id)
                .SingleOrDefaultAsync();
            if (category == null) throw new Exception("Category not found!");

            category.IsDelete = true;
            context.Categories.Update(category);
            await context.SaveChangesAsync();
        }

        public async Task<ICollection<CategoryItemDto>> GetByName(string name)
        {
            var categories = await context.Categories
                .Where(x => x.IsDelete == false)
                .Where(x => x.Name.Contains(name))
                .ToListAsync();
            return mapper.Map<List<CategoryItemDto>>(categories);
        }
    }
}
