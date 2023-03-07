using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Alex.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")] //eg: https://localhost:5001/WeatherForecast
    public class WeatherForecastController : ControllerBase
    {

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Name = "C# Name",
                Img = "C# some url"
            })
            .ToArray();
        }
    }
}