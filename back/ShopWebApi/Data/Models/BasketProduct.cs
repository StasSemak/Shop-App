using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class BasketProduct
    {
        public int BasketId { get; set; }
        public int ProductId { get; set; }
        public int Count { get; set; }
    }
}
