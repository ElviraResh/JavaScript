# Решето Эратосфена #

Алгоритм нахождения простых чисел в массиве

1. Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n. Так как 0 и 1 не являются простыми числами.
2. Пусть p=2, это первое простое число.
3. Зачеркнуть все последующие числа в списке с разницей в p, т.е. 2*p, 3*p, 4*p и т.д. В случае p=2 это будут 4,6,8....
4. Поменять значение p на первое не зачеркнутое число после p.
5. Повторить шаги 3-4 пока p2 < n.
6. Все оставшиеся не зачеркнутые числа – простые.
