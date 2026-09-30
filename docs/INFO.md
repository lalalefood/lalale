

- Criar novo usuário
    * Crie o usuário em Authentication > Users.
    * Para promover a admin
        update public.profiles
        set role = 'admin', full_name = 'Admin Name'
        where id = (
        select id from auth.users
        where email = 'admin@example.com'
        );