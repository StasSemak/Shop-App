using BussinessLogic.DTOs.Category;
using BussinessLogic.DTOs.Product;
using Data.Models;
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
        }
    }
}
