using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models.Identity
{
    public class User : IdentityUser<int>
    {
        public string Image { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
        public ICollection<Review> Reviews { get; set; }
        public Basket? Basket { get; set; }
    }
}
