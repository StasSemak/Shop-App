using AutoMapper;
using BussinessLogic.DTOs.Identity;
using BussinessLogic.Helpers;
using BussinessLogic.Interfaces;
using Data.Data;
using Data.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLogic.Services
{
    public class UserService : IUserService
    {
        private readonly ShopDbContext context;
        private readonly IMapper mapper;
        private readonly UserManager<User> userManager;
        private readonly IConfiguration configuration;

        public UserService(ShopDbContext context, IMapper mapper, UserManager<User> userManager,
            IConfiguration configuration)
        {
            this.context = context;
            this.mapper = mapper;
            this.userManager = userManager;
            this.configuration = configuration;
        }

        public async Task<UserItemDto> GetUserAsync(int id)
        {
            var user = await context.Users
                .Where(x => x.Id == id)
                .SingleOrDefaultAsync(x => x.Id == id);
            var userRole = await context.UserRoles
                .Where(x => x.UserId == user.Id)
                .FirstOrDefaultAsync();
            var role = await context.Roles
                .FindAsync(userRole.RoleId);

            var userDto = mapper.Map<UserItemDto>(user);
            userDto.Role = role.Name;
            return userDto;
        }

        public async Task RegisterAsync(UserRegisterDto model)
        {
            var user = mapper.Map<User>(model);

            if (model.Password != model.ConfirmPassword)
                throw new Exception("Passwords doesn't match!");

            var image = string.Empty;
            if (!string.IsNullOrWhiteSpace(model.ImageBase64))
            {
                image = ImageWorker.SaveImage(model.ImageBase64);
            }
            else image = "user-placeholder.jpg";
            user.Image = image;

            var result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                string exMessage = "";
                foreach(var item in result.Errors)
                {
                    exMessage += item.Description + " ";
                }
                throw new Exception(exMessage);
            }
            result = await userManager.AddToRoleAsync(user, model.Role);
        }

        public async Task<string> LoginAsync(UserLoginDto model)
        {
            var user = await userManager.FindByEmailAsync(model.Email);
            if (user == null) throw new Exception("User not found!");

            if(!await userManager.CheckPasswordAsync(user, model.Password))
            {
                throw new Exception("Incorrect email or password!");
            }

            var token = await CreateToken(user);
            return token;
        }

        public async Task<string> CreateToken(User user)
        {
            IList<string> roles = await userManager.GetRolesAsync(user);
            List<Claim> claims = new List<Claim>()
            {
                new Claim("name", user.Email),
                new Claim("image", user.Image ?? "user-placeholder.jpg")
            };
            foreach (var role in roles)
            {
                claims.Add(new Claim("roles", role));
            }
            var signinKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration.GetValue<String>("JWTSecretKey")));
            var signinCredentials = new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256);

            var jwt = new JwtSecurityToken(
                signingCredentials: signinCredentials,
                expires: DateTime.Now.AddDays(10),
                claims: claims
            );
            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }
    }
}
