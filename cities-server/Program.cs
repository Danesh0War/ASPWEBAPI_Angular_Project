using cities_server.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options => // Limit conenction to only accept my client
{
    options.AddPolicy("LimitToClientOrigin",
        builder =>
        {
            builder.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});

builder.Services.AddControllers();
builder.Services.AddSingleton<ICitiesService, CitiesService>();


var app = builder.Build();

app.UseCors("LimitToClientOrigin");
app.UseRouting();
app.MapControllers();


app.Run();

