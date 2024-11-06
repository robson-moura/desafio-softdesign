<?php

namespace App\Handler;


use App\Entity\Books;
use App\Repository\BookRepository;
use Doctrine\ORM\EntityManagerInterface;
use FOS\ElasticaBundle\Manager\RepositoryManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Serializer\SerializerInterface;

class BookHandler extends BaseHandler
{
    public function __construct(BookRepository $repository, SerializerInterface $serializer,
        UserPasswordHasherInterface $passwordEncoder, EntityManagerInterface $em)
    {
        parent::__construct($repository, $serializer, $passwordEncoder, $em);
    }

    public function create(Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);


            if ($this->repository->getByTitle($params['title'])) {
                return $this->responseWithMessage('Um livro com esse título já existe!', 400);
            }

            $book = new Books();
            $book->setTitle(ucfirst(strtolower($params['title'])));
            $book->setDescription($params['description']);
            $book->setAuthor($params['author']);
            $book->setNumberPages($params['number_pages']);    

            return $this->response($this->repository->save($book), true);
        }
        catch(\Exception $e){
          return $this->responseWithMessage($e->getMessage(), 400);
        }
    }

    public function update(Request $request, int $id)
    {
        try {
            $params = json_decode($request->getContent(), true);

            $entity = $this->repository->get($id);

            if (!empty($entity)) {

                if (isset($params['title']) && $entity->getTitle() !== $params['title']) {
                    if ($this->repository->getByTitle($params['title'])) {
                        return $this->responseWithMessage('Um livro com esse título já existe!', 400);
                    }
                    $entity->setTitle($params['title']);
                }

                if (isset($params['description'])) {
                    $entity->setDescription($params['description']);
                }

                if (isset($params['author'])) {
                    $entity->setAuthor($params['author']);
                }

                if (isset($params['number_pages'])) {
                    $entity->setNumberPages($params['number_pages']);
                }

                $entity->setDateUpdated(new \DateTime());

                return $this->response($this->repository->save($entity, true), true);
            }
            return $this->responseWithMessage('Livro não encontrado!', 404);
        }
        catch(\Exception $e){
            return $this->responseWithMessage($e->getMessage(), 400);
        }
    }
}
