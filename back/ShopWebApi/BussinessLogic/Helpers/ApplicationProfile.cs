using BussinessLogic.DTOs.Category;
using Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
        }
    }
}
