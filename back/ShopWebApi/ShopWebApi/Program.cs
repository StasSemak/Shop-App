using BussinessLogic.Helpers;
using BussinessLogic.Interfaces;
using BussinessLogic.Services;
using Data.Data;
using Data.Models.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Microsoft.IdentityModel.Tokens;
using ShopWebApi.Data;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

string connStr = builder.Configuration.GetConnectionString("LocalDb");
builder.Services.AddDbContext<ShopDbContext>(options => options.UseSqlServer(connStr));

builder.Services.AddIdentity<User, Role>(options =>
{
    options.Stores.MaxLengthForKeys = 128;
    options.Password.RequireDigit = true;
    options.Password.RequiredLength = 6;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = true;
    options.Password.RequireLowercase = false;
}).AddEntityFrameworkStores<ShopDbContext>().AddDefaultTokenProviders();

var signinKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration.GetValue<String>("JWTSecretKey")));

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(conf =>
{
    conf.RequireHttpsMetadata = false;
    conf.SaveToken = true;
    conf.TokenValidationParameters = new TokenValidationParameters()
    {
        IssuerSigningKey = signinKey,
        ValidateAudience = false,
        ValidateIssuer = false,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ClockSkew = TimeSpan.Zero
    };
});

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
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IReviewService, ReviewService>();

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
