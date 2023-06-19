using BussinessLogic.DTOs.Category;
using BussinessLogic.DTOs.Identity;
using BussinessLogic.DTOs.Product;
using BussinessLogic.DTOs.Review;
using Data.Models;
using Data.Models.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace BussinessLogic.Helpers
{
    public class ApplicationProfile : AutoMapper.Profile
    {
        public ApplicationProfile()
        {
            CreateMap<Category, CategoryItemDto>();
            CreateMap<CategoryItemDto, Category>();

            CreateMap<CategoryCreateDto, Category>()
                .ForMember(x => x.Image, o => o.Ignore());

            CreateMap<Product, ProductItemDto>()
                .ForMember(x => x.Category, o => o.MapFrom(s => s.Category.Name));
            CreateMap<ProductItemDto, Product>()
                .ForMember(x => x.Category, o => o.Ignore());

            CreateMap<ProductCreateDto, Product>()
                .ForMember(x => x.CategoryId, o => o.Ignore())
                .ForMember(x => x.Image, o => o.Ignore());

            CreateMap<User, UserItemDto>()
                .ForMember(x => x.Role, o => o.Ignore());
            CreateMap<UserItemDto, User>();

            CreateMap<UserRegisterDto, User>()
                .ForMember(x => x.UserRoles, o => o.Ignore())
                .ForMember(x => x.NormalizedEmail, o => o.MapFrom(s => s.Email))
                .ForMember(x => x.NormalizedUserName, o => o.MapFrom(s => s.UserName))
                .ForMember(x => x.Image, o => o.Ignore());

            CreateMap<Review, ReviewItemDto>()
                .ForMember(x => x.UserName, o => o.MapFrom(s => s.User.UserName))
                .ForMember(x => x.UserId, o => o.MapFrom(s => s.UserId))
                .ForMember(x => x.Date, o => o.MapFrom(s => s.Date.ToShortDateString()));
            CreateMap<ReviewItemDto, Review>()
                .ForMember(x => x.User, o => o.Ignore());

            CreateMap<ReviewCreateDto, Review>();
        }
    }
}
