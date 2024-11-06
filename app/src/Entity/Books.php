<?php

namespace App\Entity;  

use Doctrine\ORM\Mapping as ORM;  
use App\Repository\BookRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: BookRepository::class)]
class Books extends BaseEntity   
{  
    #[ORM\Column(type: "string")]
    #[Groups(['basic'])]
    private string $title;

    #[ORM\Column(type: "string")]
    #[Groups(["basic"])]
    private string $description;

    #[ORM\Column(type: "string")]
    #[Groups(["basic"])]
    private string $author; 

    #[ORM\Column(type: "integer")]
    #[Groups(["basic"])]
    private string $number_pages;

    public function getTitle(): ?string  
    {  
        return $this->title;  
    }  

    public function setTitle(string $title): self  
    {  
        $this->title = $title;  

        return $this;  
    }  

    public function getDescription(): ?string  
    {  
        return $this->description;  
    }  

    public function setDescription(string $description): self  
    {  
        $this->description = $description;  

        return $this;  
    }  

    public function getAuthor(): ?string  
    {  
        return $this->author;  
    }  

    public function setAuthor(string $author): self  
    {  
        $this->author = $author;  

        return $this;  
    }  

    public function getNumberPages(): ?int  
    {  
        return $this->number_pages;  
    }  

    public function setNumberPages(int $number_pages): self  
    {  
        $this->number_pages = $number_pages;  

        return $this;  
    }  

    public function __sleep()
    {
        return array('id');
    }
}  