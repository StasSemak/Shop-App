using Data.Data;
using Microsoft.EntityFrameworkCore;

namespace ShopWebApi.Data
{
    public static class AutoMigrate
    {
        public static void Migrate(this IApplicationBuilder app)
        {
            using (var scope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<ShopDbContext>();
                context.Database.Migrate();
            }
        }
    }
}
