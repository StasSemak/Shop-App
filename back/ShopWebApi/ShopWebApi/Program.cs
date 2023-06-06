using BussinessLogic.Helpers;
using BussinessLogic.Interfaces;
using BussinessLogic.Services;
using Data.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using ShopWebApi.Data;

var builder = WebApplication.CreateBuilder(args);

string connStr = builder.Configuration.GetConnectionString("LocalDb");
builder.Services.AddDbContext<ShopDbContext>(options => options.UseSqlServer(connStr));

string dir;
if(builder.Environment.IsDevelopment())
{
    dir = Path.Combine(Directory.GetParent(Directory.GetCurrentDirectory().ToString()).FullName,
        "BussinessLogic", "Images");
}
else dir = Path.Combine(Directory.GetCurrentDirectory(), "Images");
if(!Directory.Exists(dir))
{
    Directory.CreateDirectory(dir);
}
ImageWorker.FolderPath = dir;

builder.Services.AddScoped<ICategoryService, CategoryService>();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(dir),
    RequestPath = "/images"
});

app.UseHttpsRedirection();

app.UseCors(builder => builder
    .AllowAnyOrigin()
    .SetIsOriginAllowedToAllowWildcardSubdomains()
    .AllowAnyMethod()
    .AllowAnyHeader()
);

app.UseAuthorization();

app.MapControllers();

app.Migrate();

app.Run();
