<?php

namespace App\Controller;

use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

class HgWeatherController extends BaseController
{

    #[Route('/api/getHgWeather', methods: ['GET'])]
    public function getHgWeather() {
    
        $woeid = '461140'; 
        $dados = json_decode(file_get_contents('https://api.hgbrasil.com/weather?woeid='.$woeid.'&format=json'), true);

        return new JsonResponse($dados);
    }
}
