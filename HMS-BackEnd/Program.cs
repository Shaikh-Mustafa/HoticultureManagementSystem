using HMS_BackEnd.Data;
using HMS_BackEnd.Helper;
using HMS_BackEnd.UnitOfWork;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


//DbContext configuration...

builder.Services.AddDbContext<DataContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("Default")));



builder.Services.AddControllers();

// Unit of Work Configuration...
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);





// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();
builder.Services.AddSwaggerGen(e =>
{
    e.SwaggerDoc("v1", new OpenApiInfo { Title = "HMS API's", Version = "v1" });
    e.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please Enter Token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "bearer"
    });
    e.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference=new OpenApiReference
                            {
                                Type=ReferenceType.SecurityScheme,
                                Id="Bearer"
                            }
                        },
                        new string[]{}
                    }
                });
});



var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("This is My Secret Key"));

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
    opt =>
    {
        opt.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            ValidateIssuer = false,  // set to true after deploy on production
            ValidateAudience = false,  // set to true after deploy on production
            IssuerSigningKey = key
        };
    });



//builder.Services.AddAuthorization();


var app = builder.Build();

// Shows UseCors with CorsPolicyBuilder.
app.UseCors(builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
