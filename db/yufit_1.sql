PGDMP         "            	    {            yufit    12.16    12.16 	               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16418    yufit    DATABASE     �   CREATE DATABASE yufit WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Russian_Russia.1251' LC_CTYPE = 'Russian_Russia.1251';
    DROP DATABASE yufit;
                postgres    false            �            1259    16421    table_1_article    TABLE     �   CREATE TABLE public.table_1_article (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    summary character varying NOT NULL,
    content character varying NOT NULL,
    data date NOT NULL
);
 #   DROP TABLE public.table_1_article;
       public         heap    postgres    false            �            1259    16419    table_1_article_id_seq    SEQUENCE     �   ALTER TABLE public.table_1_article ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.table_1_article_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    203                      0    16421    table_1_article 
   TABLE DATA           L   COPY public.table_1_article (id, title, summary, content, data) FROM stdin;
    public          postgres    false    203   S	                  0    0    table_1_article_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.table_1_article_id_seq', 1, false);
          public          postgres    false    202            �
           2606    16428 $   table_1_article table_1_article_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.table_1_article
    ADD CONSTRAINT table_1_article_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.table_1_article DROP CONSTRAINT table_1_article_pkey;
       public            postgres    false    203                  x������ � �     