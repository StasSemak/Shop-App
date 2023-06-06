using Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Data
{
    public class ShopDbContext : DbContext
    {
        public ShopDbContext(DbContextOptions options) : base(options) { }
        public ShopDbContext() { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Category>().HasMany(x => x.Products)
                                      .WithOne(x => x.Category)
                                      .HasForeignKey(x => x.CategoryId)
                                      .HasPrincipalKey(x => x.Id)
                                      .IsRequired();

            builder.Entity<Category>().Property(x => x.DateCreated)
                                      .HasDefaultValue(DateTime.UtcNow);
            builder.Entity<Category>().Property(x => x.IsDelete)
                                      .HasDefaultValue(false);
            builder.Entity<Category>().Property(x => x.Name)
                                      .IsRequired()
                                      .HasMaxLength(255);
            builder.Entity<Category>().Property(x => x.Image)
                                      .IsRequired()
                                      .HasMaxLength(255);
            builder.Entity<Category>().Property(x => x.Description)
                                      .HasMaxLength(4080);

            builder.Entity<Product>().Property(x => x.DateCreated)
                                     .HasDefaultValue(DateTime.UtcNow);
            builder.Entity<Product>().Property(x => x.IsDelete)
                                     .HasDefaultValue(false);
            builder.Entity<Product>().Property(x => x.Rating)
                                     .HasDefaultValue(0);
            builder.Entity<Product>().Property(x => x.Name)
                                      .IsRequired()
                                      .HasMaxLength(255);
            builder.Entity<Product>().Property(x => x.Image)
                                      .IsRequired()
                                      .HasMaxLength(255);
            builder.Entity<Product>().Property(x => x.Description)
                                      .HasMaxLength(4080);

            builder.Entity<Category>().HasData(MockData.GetCategories());
            builder.Entity<Product>().HasData(MockData.GetProducts());
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
    }
}
