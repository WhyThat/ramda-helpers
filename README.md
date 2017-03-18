# ramda-helpers
< a   n a m e = " R a m d a H e l p e r " > < / a >  
  
 # #   R a m d a H e l p e r   :   < c o d e > o b j e c t < / c o d e >  
 * * K i n d * * :   g l o b a l   n a m e s p a c e      
  
 *   [ R a m d a H e l p e r ] ( # R a m d a H e l p e r )   :   < c o d e > o b j e c t < / c o d e >  
         *   _ i n s t a n c e _  
                 *   [ . c o m p a c t ] ( # R a m d a H e l p e r + c o m p a c t )   � � �   < c o d e > A r r a y < / c o d e >  
                 *   [ . d e s c O r d e r B y ] ( # R a m d a H e l p e r + d e s c O r d e r B y )   � � �   < c o d e > A r r a y < / c o d e >  
                 *   [ . g e t P a t h ] ( # R a m d a H e l p e r + g e t P a t h )   � � �   < c o d e > \ * < / c o d e >  
                 *   [ . i s N i l O r E m p t y ] ( # R a m d a H e l p e r + i s N i l O r E m p t y )   � � �   < c o d e > b o o l < / c o d e >  
                 *   [ . i s P a t h S a t i s f i e d ] ( # R a m d a H e l p e r + i s P a t h S a t i s f i e d )   � � �   < c o d e > B o o l e a n < / c o d e >  
                 *   [ . m a x B y K e y ] ( # R a m d a H e l p e r + m a x B y K e y )   � � �   < c o d e > \ * < / c o d e >  
                 *   [ . r e n a m e K e y s B y ] ( # R a m d a H e l p e r + r e n a m e K e y s B y )   � � �   < c o d e > O b j e c t < / c o d e >  
                 *   [ . s t r T o C a m e l C a s e ] ( # R a m d a H e l p e r + s t r T o C a m e l C a s e )   � � �   < c o d e > s t r i n g < / c o d e >  
         *   _ s t a t i c _  
                 *   [ . i s A r r a y ] ( # R a m d a H e l p e r . i s A r r a y )   � � �   < c o d e > B o o l e a n < / c o d e >  
                 *   [ . i s N o t A r r a y ] ( # R a m d a H e l p e r . i s N o t A r r a y )   � � �   < c o d e > B o o l e a n < / c o d e >  
                 *   [ . i s F u n c t i o n ] ( # R a m d a H e l p e r . i s F u n c t i o n )   � � �   < c o d e > B o o l e a n < / c o d e >  
                 *   [ . i s N o t F u n c t i o n ] ( # R a m d a H e l p e r . i s N o t F u n c t i o n )   � � �   < c o d e > B o o l e a n < / c o d e >  
                 *   [ . i s N o t A r r a y ] ( # R a m d a H e l p e r . i s N o t A r r a y )   � � �   < c o d e > B o o l e a n < / c o d e >  
                 *   [ . i s P l a i n O b j e c t ] ( # R a m d a H e l p e r . i s P l a i n O b j e c t )   � � �   < c o d e > B o o l e a n < / c o d e >  
                 *   [ . i s N o t P l a i n O b j e c t ] ( # R a m d a H e l p e r . i s N o t P l a i n O b j e c t )   � � �   < c o d e > B o o l e a n < / c o d e >  
                 *   [ . i s S e t ] ( # R a m d a H e l p e r . i s S e t )   � � �   < c o d e > B o o l e a n < / c o d e >  
  
 < a   n a m e = " R a m d a H e l p e r + c o m p a c t " > < / a >  
  
 # # #   r a m d a H e l p e r . c o m p a c t   � � �   < c o d e > A r r a y < / c o d e >  
 r e t u r n s   a   l i s t   w i t h o u t   f a l s y   v a l u e s  
  
 * * K i n d * * :   i n s t a n c e   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   T y p e   |  
 |   - - -   |  
 |   < c o d e > A r r a y < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 c o m p a c t ( [ ' ' ,   ' t e s t ' ,   0 ,   u n d e f i n e d ,   n u l l ] )     / / = >   [ ' t e s t ' ]  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r + d e s c O r d e r B y " > < / a >  
  
 # # #   r a m d a H e l p e r . d e s c O r d e r B y   � � �   < c o d e > A r r a y < / c o d e >  
 S o r t   d e s c   a   l i s t   o f   n e s t e d   o b j e c t   b y   a   p r o p  
  
 * * K i n d * * :   i n s t a n c e   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   p r o p N a m e   |   < c o d e > s t r i n g < / c o d e >   |    
 |   l i s t O f N e s t e d O b j e c t   |   < c o d e > A r r a y < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 d e s c O r d e r B y ( ' a ' ,   [ {   a : 1 ,   b : 2   } ,   {   a : 2 ,   b : 1   } ] )     / / = >   [ {   a : 2 ,   b : 1   } ,   {   a : 1 ,   b : 2   } ]  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r + g e t P a t h " > < / a >  
  
 # # #   r a m d a H e l p e r . g e t P a t h   � � �   < c o d e > \ * < / c o d e >  
 R e t r i e v e   t h e   v a l u e   a t   t h e   g i v e n   p a t h  
  
 * * K i n d * * :   i n s t a n c e   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
 * * R e t u r n s * * :   < c o d e > \ * < / c o d e >   -   T h e   d a t a   a t   ` p a t h `      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   p a t h   |   < c o d e > s t r i n g < / c o d e >   & # 1 2 4 ;   < c o d e > A r r a y . & l t ; s t r i n g & g t ; < / c o d e >   |    
 |   o b j   |   < c o d e > O b j e c t < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 g e t P a t h ( ' a . b . c ' ,   {   a :   {   b   :   {   c   :   ' v a l u e '   }   }   } )     / / = >   ' v a l u e '  
   g e t P a t h ( [ ' a ' ,   ' b ' ,   ' c ' ] ,   {   a :   {   b   :   {   c   :   ' v a l u e '   }   }   } )     / / = >   ' v a l u e '  
   g e t P a t h ( [ ' a ' ,   ' c ' ,   ' d ' ] ,   {   a :   {   b   :   {   c   :   ' v a l u e '   }   }   } )     / / = >   u n d e f i n e d  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r + i s N i l O r E m p t y " > < / a >  
  
 # # #   r a m d a H e l p e r . i s N i l O r E m p t y   � � �   < c o d e > b o o l < / c o d e >  
 T e s t   i f   v a l u e   i s   N i l O r E m p t y  
  
 * * K i n d * * :   i n s t a n c e   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
 * * S e e * * :   i s P a t h S a t i s f i e d   i f   y o u   w a n t   t o   t e s t   n e s t e d   o b j e c t      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s N i l O r E m p t y ( [ ] )   / / = >   t r u e  
 i s N i l O r E m p t y ( { } )   / / = >   t r u e  
 i s N i l O r E m p t y ( ' ' )   / / = >   t r u e  
 i s N i l O r E m p t y ( n u l l )   / / = >   t r u e  
 i s N i l O r E m p t y ( f a l s e )   / / = >   f a l s e  
 i s N i l O r E m p t y ( ' t e s t ' )   / / = >   f a l s e  
 i s N i l O r E m p t y ( [ ' t e s t ' ] )   / / = >   f a l s e  
 i s N i l O r E m p t y ( {   a :   1   } )   / / = >   f a l s e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r + i s P a t h S a t i s f i e d " > < / a >  
  
 # # #   r a m d a H e l p e r . i s P a t h S a t i s f i e d   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   ` t r u e `   i f   t h e   s p e c i f i e d   o b j e c t   p r o p e r t y   a t   g i v e n   p a t h   i s S e t   @ s e e   i s S e t  
   r e t u r n s   ` f a l s e `   o t h e r w i s e  
  
 * * K i n d * * :   i n s t a n c e   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   p r o p P a t h   |   < c o d e > s t r i n g < / c o d e >   & # 1 2 4 ;   < c o d e > A r r a y . & l t ; s t r i n g & g t ; < / c o d e >   |    
 |   o b j   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s P a t h S a t i s f i e d ( ' a . b . c ' ,   {   a :   {   b :   {   c :   ' c ' }   }   } )   / / = >   t r u e  
   i s P a t h S a t i s f i e d ( [ ' a ' ,   ' b ' ,   ' c ' ] ,   {   a :   {   b :   {   c :   ' c ' }   }   } )   / / = >   t r u e  
   i s P a t h S a t i s f i e d ( ' a . c . d ' ,   {   a :   {   b :   {   c :   ' c ' }   }   } )   / / = >   f a l s e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r + m a x B y K e y " > < / a >  
  
 # # #   r a m d a H e l p e r . m a x B y K e y   � � �   < c o d e > \ * < / c o d e >  
 R e t u r n s   t h e   o b j e c t   w h i c h   h a v e   t h e   g r e a t e r   v a l u e   b y   t h e   k e y ,  
 o t h e r w i s e   r e t u r n s   d e f a u l t   o b j e c t  
  
 * * K i n d * * :   i n s t a n c e   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   k e y   |   < c o d e > s t r i n g < / c o d e >   |    
 |   d e f a u l t O b j e c t   |   < c o d e > \ * < / c o d e >   |    
 |     |   < c o d e > A r r a y < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 m a x B y K e y ( ' a ' ,   {   a :   0   } ,   [ {   a :   6   } ,   {   a :   5   } ] )   / / = >   {   a :   6   }  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r + r e n a m e K e y s B y " > < / a >  
  
 # # #   r a m d a H e l p e r . r e n a m e K e y s B y   � � �   < c o d e > O b j e c t < / c o d e >  
 R e t u r n s   o b j e c t s   w i t h   a l l   k e y s   r e n a m e d   b y   t h e   p r e d i c a t e   ( r e c u r s i v l y )  
  
 * * K i n d * * :   i n s t a n c e   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   p r e d i c a t e   |   < c o d e > f u n c t i o n < / c o d e >   |    
 |   o b j   |   < c o d e > O b j e c t < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 r e n a m e B y K e y ( s t r   = >   ` p r e f i x _ $ { s t r } ` ,   {   t e s t :   ' t e s t '   } )  
       / / = >   {   p r e f i x _ t e s t :   ' t e s t '   }  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r + s t r T o C a m e l C a s e " > < / a >  
  
 # # #   r a m d a H e l p e r . s t r T o C a m e l C a s e   � � �   < c o d e > s t r i n g < / c o d e >  
 R e t u r n s   s t r i n g   i n   c a m e l C a s e   s t y l e  
  
 * * K i n d * * :   i n s t a n c e   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   s t r   |   < c o d e > s t r i n g < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 s t r T o C a m e l C a s e ( ' ' )   / / = >   ' '  
 s t r T o C a m e l C a s e ( ' c a m e l C a s e S t r i n g ' )     / / = >   ' c a m e l C a s e S t r i n g '  
 s t r T o C a m e l C a s e ( ' S t r W i t h U p p e r ' )     / / = >   ' s t r W i t h U p p e r '  
 s t r T o C a m e l C a s e ( ' s t r - w i t h - d a s h e s ' )     / / = >   ' s t r W i t h D a s h e s '  
 s t r T o C a m e l C a s e ( ' I a m @ - r a n d o m / s t r i n g ' )     / / = >   ' i a m R a n d o m S t r i n g '  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r . i s A r r a y " > < / a >  
  
 # # #   R a m d a H e l p e r . i s A r r a y   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   t r u e   i f   p r o p   i s   a   A r r a y  
  
 * * K i n d * * :   s t a t i c   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l u e   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s A r r a y ( ( )   = >   { } )   / / = >   f a l s e  
 i s A r r a y ( { } )   / / = >   f a l s e  
 i s A r r a y ( [ ] )   / / = >   t r u e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r . i s N o t A r r a y " > < / a >  
  
 # # #   R a m d a H e l p e r . i s N o t A r r a y   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   t r u e   i f   p r o p   i s   n o t   a n   a r r a y  
  
 * * K i n d * * :   s t a t i c   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
 * * S e e * * :   i s A r r a y      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l u e   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s N o t A r r a y ( ( )   = >   { } )   / / = >   t r u e  
 i s N o t A r r a y ( { } )   / / = >   t r u e  
 i s N o t A r r a y ( [ ] )   / / = >   f a l s e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r . i s F u n c t i o n " > < / a >  
  
 # # #   R a m d a H e l p e r . i s F u n c t i o n   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   t r u e   i f   p r o p   i s   a   f u n c t i o n  
  
 * * K i n d * * :   s t a t i c   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l u e   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s F u n c t i o n ( { } )   / / = >   f a l s e  
 i s F u n c t i o n ( ( )   = >   { } )   / / = >   t r u e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r . i s N o t F u n c t i o n " > < / a >  
  
 # # #   R a m d a H e l p e r . i s N o t F u n c t i o n   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   t r u e   i f   p r o p   i s   n o t   a   f u n c t i o n  
  
 * * K i n d * * :   s t a t i c   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
 * * S e e * * :   i s F u n c t i o n      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l u e   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s N o t F u n c t i o n ( ( )   = >   { } )   / / = >   f a l s e  
 i s N o t F u n c t i o n ( { } )   / / = >   t r u e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r . i s N o t A r r a y " > < / a >  
  
 # # #   R a m d a H e l p e r . i s N o t A r r a y   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   t r u e   i f   p r o p   i s   n o t   a n   a r r a y  
  
 * * K i n d * * :   s t a t i c   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
 * * S e e * * :   i s A r r a y      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l u e   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s N o t A r r a y ( ( )   = >   { } )   / / = >   t r u e  
 i s N o t A r r a y ( { } )   / / = >   t r u e  
 i s N o t A r r a y ( [ ] )   / / = >   f a l s e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r . i s P l a i n O b j e c t " > < / a >  
  
 # # #   R a m d a H e l p e r . i s P l a i n O b j e c t   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   t r u e   i f   p r o p   i s   a   p l a i n O b j e c t  
  
 * * K i n d * * :   s t a t i c   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l u e   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s P l a i n O b j e c t ( { } )   / / = >   t r u e  
 i s P l a i n O b j e c t ( ( )   = >   { } )   / / = >   f a l s e  
 i s P l a i n O b j e c t ( [ ] )   / / = >   f a l s e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r . i s N o t P l a i n O b j e c t " > < / a >  
  
 # # #   R a m d a H e l p e r . i s N o t P l a i n O b j e c t   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   t r u e   i f   p r o p   i s   n o t   a   p l a i n O b j e c t  
  
 * * K i n d * * :   s t a t i c   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
 * * S e e * * :   i s P l a i n O b j e c t      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l u e   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s N o t P l a i n O b j e c t ( { } )   / / = >   f a l s e  
 i s N o t P l a i n O b j e c t ( ( )   = >   { } )   / / = >   t r u e  
 i s N o t P l a i n O b j e c t ( [ ] )   / / = >   t r u e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r . i s S e t " > < / a >  
  
 # # #   R a m d a H e l p e r . i s S e t   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   ` t r u e `   f o r   v a l u e   t h a t   a r e   d e f i n e d   a n d   n o t   e m p t y ,   ` f a l s e `   o t h e r w i s e  
  
 * * K i n d * * :   s t a t i c   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
 * * S e e * * :   i s N i l O r E m p t y      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l u e   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s S e t ( [ ] )   / / = >   f a l s e  
 i s S e t ( { } )   / / = >   f a l s e  
 i s S e t ( ' ' )   / / = >   f a l s e  
 i s S e t ( n u l l )   / / = >   f a l s e  
 i s S e t ( f a l s e )   / / = >   t r u e  
 i s S e t ( ' t e s t ' )   / / = >   t r u e  
 i s S e t ( [ ' t e s t ' ] )   / / = >   t r u e  
 i s S e t ( {   a :   1   } )   / / = >   t r u e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r " > < / a >  
  
 # #   R a m d a H e l p e r   :   < c o d e > o b j e c t < / c o d e >  
 * * K i n d * * :   g l o b a l   n a m e s p a c e      
  
 *   [ R a m d a H e l p e r ] ( # R a m d a H e l p e r )   :   < c o d e > o b j e c t < / c o d e >  
         *   _ i n s t a n c e _  
                 *   [ . c o m p a c t ] ( # R a m d a H e l p e r + c o m p a c t )   � � �   < c o d e > A r r a y < / c o d e >  
                 *   [ . d e s c O r d e r B y ] ( # R a m d a H e l p e r + d e s c O r d e r B y )   � � �   < c o d e > A r r a y < / c o d e >  
                 *   [ . g e t P a t h ] ( # R a m d a H e l p e r + g e t P a t h )   � � �   < c o d e > \ * < / c o d e >  
                 *   [ . i s N i l O r E m p t y ] ( # R a m d a H e l p e r + i s N i l O r E m p t y )   � � �   < c o d e > b o o l < / c o d e >  
                 *   [ . i s P a t h S a t i s f i e d ] ( # R a m d a H e l p e r + i s P a t h S a t i s f i e d )   � � �   < c o d e > B o o l e a n < / c o d e >  
                 *   [ . m a x B y K e y ] ( # R a m d a H e l p e r + m a x B y K e y )   � � �   < c o d e > \ * < / c o d e >  
                 *   [ . r e n a m e K e y s B y ] ( # R a m d a H e l p e r + r e n a m e K e y s B y )   � � �   < c o d e > O b j e c t < / c o d e >  
                 *   [ . s t r T o C a m e l C a s e ] ( # R a m d a H e l p e r + s t r T o C a m e l C a s e )   � � �   < c o d e > s t r i n g < / c o d e >  
         *   _ s t a t i c _  
                 *   [ . i s A r r a y ] ( # R a m d a H e l p e r . i s A r r a y )   � � �   < c o d e > B o o l e a n < / c o d e >  
                 *   [ . i s N o t A r r a y ] ( # R a m d a H e l p e r . i s N o t A r r a y )   � � �   < c o d e > B o o l e a n < / c o d e >  
                 *   [ . i s F u n c t i o n ] ( # R a m d a H e l p e r . i s F u n c t i o n )   � � �   < c o d e > B o o l e a n < / c o d e >  
                 *   [ . i s N o t F u n c t i o n ] ( # R a m d a H e l p e r . i s N o t F u n c t i o n )   � � �   < c o d e > B o o l e a n < / c o d e >  
                 *   [ . i s N o t A r r a y ] ( # R a m d a H e l p e r . i s N o t A r r a y )   � � �   < c o d e > B o o l e a n < / c o d e >  
                 *   [ . i s P l a i n O b j e c t ] ( # R a m d a H e l p e r . i s P l a i n O b j e c t )   � � �   < c o d e > B o o l e a n < / c o d e >  
                 *   [ . i s N o t P l a i n O b j e c t ] ( # R a m d a H e l p e r . i s N o t P l a i n O b j e c t )   � � �   < c o d e > B o o l e a n < / c o d e >  
                 *   [ . i s S e t ] ( # R a m d a H e l p e r . i s S e t )   � � �   < c o d e > B o o l e a n < / c o d e >  
  
 < a   n a m e = " R a m d a H e l p e r + c o m p a c t " > < / a >  
  
 # # #   r a m d a H e l p e r . c o m p a c t   � � �   < c o d e > A r r a y < / c o d e >  
 r e t u r n s   a   l i s t   w i t h o u t   f a l s y   v a l u e s  
  
 * * K i n d * * :   i n s t a n c e   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   T y p e   |  
 |   - - -   |  
 |   < c o d e > A r r a y < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 c o m p a c t ( [ ' ' ,   ' t e s t ' ,   0 ,   u n d e f i n e d ,   n u l l ] )     / / = >   [ ' t e s t ' ]  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r + d e s c O r d e r B y " > < / a >  
  
 # # #   r a m d a H e l p e r . d e s c O r d e r B y   � � �   < c o d e > A r r a y < / c o d e >  
 S o r t   d e s c   a   l i s t   o f   n e s t e d   o b j e c t   b y   a   p r o p  
  
 * * K i n d * * :   i n s t a n c e   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   p r o p N a m e   |   < c o d e > s t r i n g < / c o d e >   |    
 |   l i s t O f N e s t e d O b j e c t   |   < c o d e > A r r a y < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 d e s c O r d e r B y ( ' a ' ,   [ {   a : 1 ,   b : 2   } ,   {   a : 2 ,   b : 1   } ] )     / / = >   [ {   a : 2 ,   b : 1   } ,   {   a : 1 ,   b : 2   } ]  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r + g e t P a t h " > < / a >  
  
 # # #   r a m d a H e l p e r . g e t P a t h   � � �   < c o d e > \ * < / c o d e >  
 R e t r i e v e   t h e   v a l u e   a t   t h e   g i v e n   p a t h  
  
 * * K i n d * * :   i n s t a n c e   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
 * * R e t u r n s * * :   < c o d e > \ * < / c o d e >   -   T h e   d a t a   a t   ` p a t h `      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   p a t h   |   < c o d e > s t r i n g < / c o d e >   & # 1 2 4 ;   < c o d e > A r r a y . & l t ; s t r i n g & g t ; < / c o d e >   |    
 |   o b j   |   < c o d e > O b j e c t < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 g e t P a t h ( ' a . b . c ' ,   {   a :   {   b   :   {   c   :   ' v a l u e '   }   }   } )     / / = >   ' v a l u e '  
   g e t P a t h ( [ ' a ' ,   ' b ' ,   ' c ' ] ,   {   a :   {   b   :   {   c   :   ' v a l u e '   }   }   } )     / / = >   ' v a l u e '  
   g e t P a t h ( [ ' a ' ,   ' c ' ,   ' d ' ] ,   {   a :   {   b   :   {   c   :   ' v a l u e '   }   }   } )     / / = >   u n d e f i n e d  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r + i s N i l O r E m p t y " > < / a >  
  
 # # #   r a m d a H e l p e r . i s N i l O r E m p t y   � � �   < c o d e > b o o l < / c o d e >  
 T e s t   i f   v a l u e   i s   N i l O r E m p t y  
  
 * * K i n d * * :   i n s t a n c e   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
 * * S e e * * :   i s P a t h S a t i s f i e d   i f   y o u   w a n t   t o   t e s t   n e s t e d   o b j e c t      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s N i l O r E m p t y ( [ ] )   / / = >   t r u e  
 i s N i l O r E m p t y ( { } )   / / = >   t r u e  
 i s N i l O r E m p t y ( ' ' )   / / = >   t r u e  
 i s N i l O r E m p t y ( n u l l )   / / = >   t r u e  
 i s N i l O r E m p t y ( f a l s e )   / / = >   f a l s e  
 i s N i l O r E m p t y ( ' t e s t ' )   / / = >   f a l s e  
 i s N i l O r E m p t y ( [ ' t e s t ' ] )   / / = >   f a l s e  
 i s N i l O r E m p t y ( {   a :   1   } )   / / = >   f a l s e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r + i s P a t h S a t i s f i e d " > < / a >  
  
 # # #   r a m d a H e l p e r . i s P a t h S a t i s f i e d   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   ` t r u e `   i f   t h e   s p e c i f i e d   o b j e c t   p r o p e r t y   a t   g i v e n   p a t h   i s S e t   @ s e e   i s S e t  
   r e t u r n s   ` f a l s e `   o t h e r w i s e  
  
 * * K i n d * * :   i n s t a n c e   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   p r o p P a t h   |   < c o d e > s t r i n g < / c o d e >   & # 1 2 4 ;   < c o d e > A r r a y . & l t ; s t r i n g & g t ; < / c o d e >   |    
 |   o b j   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s P a t h S a t i s f i e d ( ' a . b . c ' ,   {   a :   {   b :   {   c :   ' c ' }   }   } )   / / = >   t r u e  
   i s P a t h S a t i s f i e d ( [ ' a ' ,   ' b ' ,   ' c ' ] ,   {   a :   {   b :   {   c :   ' c ' }   }   } )   / / = >   t r u e  
   i s P a t h S a t i s f i e d ( ' a . c . d ' ,   {   a :   {   b :   {   c :   ' c ' }   }   } )   / / = >   f a l s e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r + m a x B y K e y " > < / a >  
  
 # # #   r a m d a H e l p e r . m a x B y K e y   � � �   < c o d e > \ * < / c o d e >  
 R e t u r n s   t h e   o b j e c t   w h i c h   h a v e   t h e   g r e a t e r   v a l u e   b y   t h e   k e y ,  
 o t h e r w i s e   r e t u r n s   d e f a u l t   o b j e c t  
  
 * * K i n d * * :   i n s t a n c e   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   k e y   |   < c o d e > s t r i n g < / c o d e >   |    
 |   d e f a u l t O b j e c t   |   < c o d e > \ * < / c o d e >   |    
 |     |   < c o d e > A r r a y < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 m a x B y K e y ( ' a ' ,   {   a :   0   } ,   [ {   a :   6   } ,   {   a :   5   } ] )   / / = >   {   a :   6   }  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r + r e n a m e K e y s B y " > < / a >  
  
 # # #   r a m d a H e l p e r . r e n a m e K e y s B y   � � �   < c o d e > O b j e c t < / c o d e >  
 R e t u r n s   o b j e c t s   w i t h   a l l   k e y s   r e n a m e d   b y   t h e   p r e d i c a t e   ( r e c u r s i v l y )  
  
 * * K i n d * * :   i n s t a n c e   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   p r e d i c a t e   |   < c o d e > f u n c t i o n < / c o d e >   |    
 |   o b j   |   < c o d e > O b j e c t < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 r e n a m e B y K e y ( s t r   = >   ` p r e f i x _ $ { s t r } ` ,   {   t e s t :   ' t e s t '   } )  
       / / = >   {   p r e f i x _ t e s t :   ' t e s t '   }  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r + s t r T o C a m e l C a s e " > < / a >  
  
 # # #   r a m d a H e l p e r . s t r T o C a m e l C a s e   � � �   < c o d e > s t r i n g < / c o d e >  
 R e t u r n s   s t r i n g   i n   c a m e l C a s e   s t y l e  
  
 * * K i n d * * :   i n s t a n c e   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   s t r   |   < c o d e > s t r i n g < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 s t r T o C a m e l C a s e ( ' ' )   / / = >   ' '  
 s t r T o C a m e l C a s e ( ' c a m e l C a s e S t r i n g ' )     / / = >   ' c a m e l C a s e S t r i n g '  
 s t r T o C a m e l C a s e ( ' S t r W i t h U p p e r ' )     / / = >   ' s t r W i t h U p p e r '  
 s t r T o C a m e l C a s e ( ' s t r - w i t h - d a s h e s ' )     / / = >   ' s t r W i t h D a s h e s '  
 s t r T o C a m e l C a s e ( ' I a m @ - r a n d o m / s t r i n g ' )     / / = >   ' i a m R a n d o m S t r i n g '  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r . i s A r r a y " > < / a >  
  
 # # #   R a m d a H e l p e r . i s A r r a y   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   t r u e   i f   p r o p   i s   a   A r r a y  
  
 * * K i n d * * :   s t a t i c   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l u e   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s A r r a y ( ( )   = >   { } )   / / = >   f a l s e  
 i s A r r a y ( { } )   / / = >   f a l s e  
 i s A r r a y ( [ ] )   / / = >   t r u e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r . i s N o t A r r a y " > < / a >  
  
 # # #   R a m d a H e l p e r . i s N o t A r r a y   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   t r u e   i f   p r o p   i s   n o t   a n   a r r a y  
  
 * * K i n d * * :   s t a t i c   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
 * * S e e * * :   i s A r r a y      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l u e   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s N o t A r r a y ( ( )   = >   { } )   / / = >   t r u e  
 i s N o t A r r a y ( { } )   / / = >   t r u e  
 i s N o t A r r a y ( [ ] )   / / = >   f a l s e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r . i s F u n c t i o n " > < / a >  
  
 # # #   R a m d a H e l p e r . i s F u n c t i o n   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   t r u e   i f   p r o p   i s   a   f u n c t i o n  
  
 * * K i n d * * :   s t a t i c   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l u e   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s F u n c t i o n ( { } )   / / = >   f a l s e  
 i s F u n c t i o n ( ( )   = >   { } )   / / = >   t r u e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r . i s N o t F u n c t i o n " > < / a >  
  
 # # #   R a m d a H e l p e r . i s N o t F u n c t i o n   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   t r u e   i f   p r o p   i s   n o t   a   f u n c t i o n  
  
 * * K i n d * * :   s t a t i c   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
 * * S e e * * :   i s F u n c t i o n      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l u e   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s N o t F u n c t i o n ( ( )   = >   { } )   / / = >   f a l s e  
 i s N o t F u n c t i o n ( { } )   / / = >   t r u e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r . i s N o t A r r a y " > < / a >  
  
 # # #   R a m d a H e l p e r . i s N o t A r r a y   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   t r u e   i f   p r o p   i s   n o t   a n   a r r a y  
  
 * * K i n d * * :   s t a t i c   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
 * * S e e * * :   i s A r r a y      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l u e   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s N o t A r r a y ( ( )   = >   { } )   / / = >   t r u e  
 i s N o t A r r a y ( { } )   / / = >   t r u e  
 i s N o t A r r a y ( [ ] )   / / = >   f a l s e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r . i s P l a i n O b j e c t " > < / a >  
  
 # # #   R a m d a H e l p e r . i s P l a i n O b j e c t   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   t r u e   i f   p r o p   i s   a   p l a i n O b j e c t  
  
 * * K i n d * * :   s t a t i c   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l u e   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s P l a i n O b j e c t ( { } )   / / = >   t r u e  
 i s P l a i n O b j e c t ( ( )   = >   { } )   / / = >   f a l s e  
 i s P l a i n O b j e c t ( [ ] )   / / = >   f a l s e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r . i s N o t P l a i n O b j e c t " > < / a >  
  
 # # #   R a m d a H e l p e r . i s N o t P l a i n O b j e c t   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   t r u e   i f   p r o p   i s   n o t   a   p l a i n O b j e c t  
  
 * * K i n d * * :   s t a t i c   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
 * * S e e * * :   i s P l a i n O b j e c t      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l u e   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s N o t P l a i n O b j e c t ( { } )   / / = >   f a l s e  
 i s N o t P l a i n O b j e c t ( ( )   = >   { } )   / / = >   t r u e  
 i s N o t P l a i n O b j e c t ( [ ] )   / / = >   t r u e  
 ` ` `  
 < a   n a m e = " R a m d a H e l p e r . i s S e t " > < / a >  
  
 # # #   R a m d a H e l p e r . i s S e t   � � �   < c o d e > B o o l e a n < / c o d e >  
 R e t u r n s   ` t r u e `   f o r   v a l u e   t h a t   a r e   d e f i n e d   a n d   n o t   e m p t y ,   ` f a l s e `   o t h e r w i s e  
  
 * * K i n d * * :   s t a t i c   p r o p e r t y   o f   < c o d e > [ R a m d a H e l p e r ] ( # R a m d a H e l p e r ) < / c o d e >      
 * * S e e * * :   i s N i l O r E m p t y      
  
 |   P a r a m   |   T y p e   |  
 |   - - -   |   - - -   |  
 |   v a l u e   |   < c o d e > \ * < / c o d e >   |    
  
 * * E x a m p l e * *      
 ` ` ` j s  
 i s S e t ( [ ] )   / / = >   f a l s e  
 i s S e t ( { } )   / / = >   f a l s e  
 i s S e t ( ' ' )   / / = >   f a l s e  
 i s S e t ( n u l l )   / / = >   f a l s e  
 i s S e t ( f a l s e )   / / = >   t r u e  
 i s S e t ( ' t e s t ' )   / / = >   t r u e  
 i s S e t ( [ ' t e s t ' ] )   / / = >   t r u e  
 i s S e t ( {   a :   1   } )   / / = >   t r u e  
 ` ` `  
 