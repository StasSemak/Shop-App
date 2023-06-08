using BussinessLogic.DTOs.Review;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLogic.Interfaces
{
    public interface IReviewService
    {
        Task<ReviewItemDto> GetAsync(int id);
        Task<ICollection<ReviewItemDto>> GetByProductAsync(int productId);
        Task<ReviewItemDto> CreateAsync(ReviewCreateDto model);
        Task<ReviewItemDto> UpdateAsync(ReviewUpdateDto model);
        Task DeleteAsync(int id);
    }
}
