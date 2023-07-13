using BussinessLogic.DTOs.Basket;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLogic.Interfaces
{
    public interface IBasketService
    {
        Task Create(int userId);
        Task<List<BasketItemDto>> Get(int userId);
        Task AddProduct(int userId, int productId);
        Task RemoveProduct(int userId, int productId);
        Task Update(BasketUpdateDto model);
    }
}
