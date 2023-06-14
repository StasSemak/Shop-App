using BussinessLogic.DTOs.Category;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLogic.Interfaces
{
    public interface ICategoryService
    {
        Task<CategoryItemDto> GetAsync(int id);
        Task<ICollection<CategoryItemDto>> GetAllAsync();
        Task<CategoryItemDto> CreateAsync(CategoryCreateDto model);
        Task<CategoryItemDto> UpdateAsync(CategoryUpdateDto model);
        Task DeleteAsync(int id);
        Task<ICollection<CategoryItemDto>> GetByName(string name);
    }
}
