using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLogic.DTOs.Basket
{
    public class BasketUpdateDto
    {
        public int UserId { get; set; }
        public ICollection<BasketItemDto> Products { get; set; }
    }
}
