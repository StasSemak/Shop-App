using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLogic.DTOs.Review
{
    public class ReviewCreateDto
    {
        public string Text { get; set; }
        public int Mark { get; set; }
        public int ProductId { get; set; }
        public int UserId { get; set; }
    }
}
