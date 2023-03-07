using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Alex.Controllers
{
    [Authorize]
    [ApiController]
    [Route("pokemons")] //eg: https://localhost:5001/pokemon
    public class PokemonController : ControllerBase
    {

        private readonly ILogger<PokemonController> _logger;

        public PokemonController(ILogger<PokemonController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Pokemon> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new Pokemon
            {
                Name = "C# Name",
                Img = "C# some url"
            })
            .ToArray();
        }
    }
}