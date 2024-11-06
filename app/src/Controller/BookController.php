<?php

namespace App\Controller;

use App\Handler\BookHandler;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class BookController extends BaseController
{
    private BookHandler $handler;

    function __construct(BookHandler $handler)
    {
        $this->handler = $handler;
    }

    #[Route('/api/book', methods: ['POST'])]
    public function create(Request $request)
    {
        return $this->handler->create($request);
    }

    #[Route('/api/book/{id}', methods: ['PUT'])]
    public function update(Request $request, int $id)
    {
        return $this->handler->update($request, $id);
    }

    #[Route('/api/book/{id}', methods: ['DELETE'])]
    public function delete(Request $request, int $id)
    {
        return $this->handler->delete($id);
    }

    #[Route('/api/books', methods: ['GET'])]
    public function getAll(Request $request)
    {
        return $this->handler->getAll($request);
    }

    #[Route('/api/book/{id}', methods: ['GET'])]
    public function get(Request $request, int $id)
    {
        return $this->handler->get($request, $id);
    }
}
