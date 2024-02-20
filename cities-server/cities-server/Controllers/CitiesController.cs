using cities_server.Models;
using cities_server.Services;
using Microsoft.AspNetCore.Mvc;

namespace cities_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitiesController : ControllerBase
    {
        private ICitiesService _citiesService;

        public CitiesController(ICitiesService citiesService)
        {
            _citiesService = citiesService;
        }

        [HttpGet]
        public IEnumerable<City> Get()
        {
            return _citiesService.GetCities();
        }

        [HttpPost]
        public IActionResult Post(City city)
        {
            _citiesService.AddCity(city);
            return StatusCode(201);
        }


    }
}
