<?php

namespace App\Repository;

use App\Entity\Books;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;

class BookRepository extends BaseRepository
{
    public function __construct(ManagerRegistry $registry, PaginatorInterface $paginator)
    {
        $this->class = Books::class;
        parent::__construct($registry, $paginator);
    }

    public function getByTitle($title){
        return $this->findOneBy([
            'title' => $title
        ]);
    }
}