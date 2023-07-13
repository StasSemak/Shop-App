using Data.Models;
using Data.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Data.Data
{
    public class ShopDbContext : IdentityDbContext<User, Role, int,
        IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>,
        IdentityRoleClaim<int>, IdentityUserToken<int>>
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

            builder.Entity<UserRole>(x =>
            {
                x.HasKey(x => new { x.UserId, x.RoleId });
                x.HasOne(x => x.Role)
                    .WithMany(x => x.UserRoles)
                    .HasForeignKey(x => x.RoleId)
                    .IsRequired();
                x.HasOne(x => x.User)
                    .WithMany(x => x.UserRoles)
                    .HasForeignKey(x => x.UserId)
                    .IsRequired();
            });

            builder.Entity<Review>().HasOne(x => x.Product)
                                    .WithMany(x => x.Reviews)
                                    .HasForeignKey(x => x.ProductId)
                                    .HasPrincipalKey(x => x.Id)
                                    .IsRequired();
            builder.Entity<Review>().HasOne(x => x.User)
                                    .WithMany(x => x.Reviews)
                                    .HasForeignKey(x => x.ProductId)
                                    .HasPrincipalKey(x => x.Id)
                                    .IsRequired();
            builder.Entity<Review>().Property(x => x.Text)
                                    .HasMaxLength(4080);
            builder.Entity<Review>().Property(x => x.Date)
                                    .HasDefaultValue(DateTime.UtcNow);
            builder.Entity<Review>().Property(x => x.IsDelete)
                                    .HasDefaultValue(false);

            builder.Entity<User>().HasOne(x => x.Basket)
                                  .WithOne(x => x.User)
                                  .HasForeignKey<Basket>(x => x.UserId)
                                  .IsRequired();

            builder.Entity<Basket>().HasMany(x => x.Products)
                                    .WithMany(x => x.Baskets)
                                    .UsingEntity<BasketProduct>(
                x => x.Property(x => x.Count).HasDefaultValue(1));

            builder.Entity<Category>().HasData(MockData.GetCategories());
            builder.Entity<Product>().HasData(MockData.GetProducts());
            builder.Entity<Role>().HasData(MockData.GetRoles());
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Basket> Baskets { get; set; }
        public DbSet<BasketProduct> BasketProducts { get; set; }
    }
}
