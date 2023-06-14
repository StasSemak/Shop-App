using BussinessLogic.DTOs.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLogic.Interfaces
{
    public interface IProductService
    {
        Task<ProductItemDto> GetAsync(int id);
        Task<ICollection<ProductItemDto>> GetAllAsync();
        Task<ProductItemDto> CreateAsync(ProductCreateDto model);
        Task<ProductItemDto> UpdateAsync(ProductUpdateDto model);
        Task DeleteAsync(int id);
        Task<ICollection<ProductItemDto>> GetByCategory(int id);
        Task<ICollection<ProductItemDto>> GetBySearchRequest(ProductSearchDto model);
    }
}
