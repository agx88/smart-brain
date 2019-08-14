BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined) values ('Jessie', 'jessie@gmail.com', '5', '2019-01-01');
INSERT into login (hash, email) values ('$2y$12$85AIJu.D9exvnp4Qs3KMleLziCJJeRbMO28OjpKE4YDwioVjoHoyC', 'jessie@gmail.com');

COMMIT;