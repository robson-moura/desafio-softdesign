<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;

class UserRepository extends BaseRepository
{
    public function __construct(ManagerRegistry $registry, PaginatorInterface $paginator)
    {
        $this->class = User::class;
        parent::__construct($registry, $paginator);
    }

    public function getByUsername($username){
        return $this->findOneBy([
            'username' => $username
        ]);
    }

    public function getByEmail($email){
        return $this->findOneBy([
            'email' => $email
        ]);
    }
}




