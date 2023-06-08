using BussinessLogic.DTOs.Identity;
using Data.Models.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLogic.Interfaces
{
    public interface IUserService
    {
        Task RegisterAsync(UserRegisterDto model);
        Task<string> LoginAsync(UserLoginDto model);
        Task<UserItemDto> GetUserAsync(int id);
        Task<string> CreateToken(User user);
    }
}
