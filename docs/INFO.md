

- Criar novo usuário
    * Crie o usuário em Authentication > Users.
    * Para promover a admin
        update public.profiles
        set role = 'admin', full_name = 'llalalefoodsandevents'
        where id = (
        select id from auth.users
        where email = 'llalalefoodsandevents@gmail.com'
        );


llalalefoodsandevents@gmail.com
lalale@2026
