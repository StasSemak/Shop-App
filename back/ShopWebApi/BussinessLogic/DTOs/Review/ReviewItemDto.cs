using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLogic.DTOs.Review
{
    public class ReviewItemDto
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int Mark { get; set; }
        public string Date { get; set; }
        public string UserName { get; set; }
        public string UserId { get; set; }
    }
}
