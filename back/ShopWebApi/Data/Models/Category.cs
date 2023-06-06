using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDelete { get; set; }
        public string Image { get; set; }
        public DateTime DateCreated { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
