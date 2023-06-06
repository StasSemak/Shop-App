using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public bool IsDelete { get; set; }
        public string Image { get; set; }
        public DateTime DateCreated { get; set; }
        public double Rating { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
