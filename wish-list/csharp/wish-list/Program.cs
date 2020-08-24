using System;
using System.Collections.Generic;

namespace wish_list
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> Wishes = new List<string>();
            Wishes.Add("An original eight track of William Shatner's 'Lucy in the Sky with Diamonds'");
            Wishes.Add("The ability to think of interesting wishes on short notice");
            Wishes.Add("A washtub of Skittles");
            Wishes.Add("World peace, but not the kind of world peace where all the humans are removed from existence");
            Wishes.Add("A TV that is NOT internet-capable");
            Wishes.Add("The ability to fly, but, like, really fast...not just, like, how fast I can walk, but, like, fast, you know?");

            Console.WriteLine("My wishes...");
            foreach (string wish in Wishes)
            {
                Console.WriteLine($"{wish}");
            }

        }

    }

}