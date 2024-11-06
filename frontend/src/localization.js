import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    sr: {
        base: {
            profile: {
                name: 'Nome',
                surname: 'Sobrenome',
                email: 'E-Mail',
                username: 'Nome de usuário',
                password: 'Senha',
                role: 'Permissão',
                userType: 'Tipo de conta'
            },
            book: {
                title: 'Título',
                description: 'Descrição',
                author: 'Autor',
                number_pages: 'Número de paginas'
            },
            table: {
                actions: 'Ações',
                edit: 'Editar',
                delete: 'Excluir'
            },
            filter: {
                sort: {
                    sortType: 'Ordenação',
                    datetimeDesc: 'Do mais novo para antigo',
                    datetimeAsc: 'Do antigo para o mais novo',
                }
            },
            role: {
                user: 'Usuário',
                moderator: 'Moderador',
                admin: 'Administrador'
            },
            userType: {
                individual: 'Individual',
                company: 'Empresa',
            }
        },
        forms: {
            common: {
                save: 'Salvar',
                login: 'Login',
                logout: 'Logout',
                register: 'Cadastro',
                thisFieldIsRequired: 'Este campo é obrigatório',
                emailFormatError: 'Digite um e-mail valido!',
                reactApp: 'Desafio'
            },
            editUser: {
                title: 'Editar Usuário',
            },
            addUser: {
                title: 'Adicionar Usuário',
            },
            editBook: {
                title: 'Editar Livro',
            },
            addBook: {
                title: 'Adicionar Livro',
            }
        },
        components: {
            FileUpload: {
                upload: 'Upload',
                files: 'Arquivo',
                dragDrop: 'Arraste e solte um arquivo',
            },
            yesNoDialog: {
                yes: 'Sim',
                no: 'Não',
                confirmDelete: 'Confirmar exclusão',
                confirmDeleteMessage: 'Tem certeza de que deseja excluir este registro?',
            }
        },
        pages: {
            register: {
                registration: 'Cadastro',
                alreadyHaveAccount: 'Você já tem uma conta?'
            },
            login: {
                createNewAccount: 'Crie uma nova conta',
                wrongUsernameOrPassword: 'Senha do nome do próximo usuário',
            },
            home: {
                title: 'Página principal',
                welcome: 'Bem vindo!',
                hgWeather: {
                    title: 'Clima Tempo Atual',
                    city: 'Cidade',
                    temp: 'Temperatura',
                    windSpeedy: 'Velocidade do Vento',
                    humidity: 'Umidade',
                    load: 'Carregando dados de clima.'
                }
            },
            boardUser: {
                title: 'Usuários'
            },
            boardModerator: {
                title: 'Usuários'
            },
            boardAdmin: {
                title: 'Usuários'
            },
            boardBook: {
                title: 'Livros'
            },
        }
    }
});

export default strings;
