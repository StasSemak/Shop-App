using Data.Models.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class Review
    {
        public int Id { get; set; }
        public string Text { get; set; }
        [Range(1,5)]
        public int Mark { get; set; }
        public DateTime Date { get; set; }
        public bool IsDelete { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
