using Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Data
{
    public static class MockData
    {
        public static List<Category> GetCategories() 
        {
            return new List<Category>()
            {
                new Category() 
                {
                    Id = 1,
                    Name = "Laptops",
                    Image = "laptop.jpg",
                    Description = "Cool laptops here"
                },
                new Category()
                {
                    Id = 2,
                    Name = "Phones",
                    Image = "phone.jpg",
                    Description = "Great phones for everyone"
                },
                new Category()
                {
                    Id = 3,
                    Name = "Monitors",
                    Image = "monitor.jpg",
                    Description = "Monitors for all uses"
                },
                new Category()
                {
                    Id = 4,
                    Name = "RAM",
                    Image = "ram.jpg",
                    Description = "Memory that your computer will enjoy"
                },
                new Category()
                {
                    Id = 5,
                    Name = "CPU",
                    Image = "cpu.jpg",
                    Description = "Processors smarter than Einstein"
                },
                new Category()
                {
                    Id = 6,
                    Name = "GPU",
                    Image = "gpu.jpg",
                    Description = "Best graphics for not only games"
                }
            };
        }

        public static List<Product> GetProducts()
        {
            return new List<Product>()
            {
                new Product()
                {
                    Id = 1,
                    Name = "Acer Aspire 7",
                    Price = 28999,
                    Description = "Екран 15.6\" IPS (1920x1080) Full HD, матовий / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.15 кг / чорний",
                    Image = "acer1.jpg",
                    CategoryId = 1
                },
                new Product()
                {
                    Id = 2,
                    Name = "ASUS Laptop X515EA",
                    Price = 18999,
                    Description = "Екран 15.6\" IPS (1920x1080) Full HD, матовий / Intel Core i3-1115G4 (3.0 - 4.1 ГГц) / RAM 12 ГБ / SSD 512 ГБ / Intel UHD Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / без ОС / 1.8 кг / сірий",
                    Image = "asus1.jpg",
                    CategoryId = 1
                },
                new Product()
                {
                    Id = 3,
                    Name = "Samsung Galaxy A24",
                    Price = 9499,
                    Description = "Екран (6.5\", Super AMOLED, 2340x1080) / Mediatek Helio G99 (2 x 2.6 ГГц + 6 x 2.0 ГГц) / основна потрійна камера: 50 Мп + 5 Мп + 2 Мп, фронтальна камера: 13 Мп / RAM2 ГБ вбудованої пам'яті + microSD (до 1 ТБ) / 3G / LTE / GPS / ГЛОНАСС / BDS / підтримка 2х SIM-карток (Nano-SIM) / Android 13 / 5000 мА * год",
                    Image = "samsung1.jpg",
                    CategoryId = 2
                },
                new Product()
                {
                    Id = 4,
                    Name = "Apple iPhone 13",
                    Price = 9499,
                    Description = "Екран (6.1\", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / подвійна основна камера: 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 128 ГБ вбудованої пам'яті / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 15",
                    Image = "apple1.jpg",
                    CategoryId = 2
                },
                new Product()
                {
                    Id = 5,
                    Name = "AOC 24G2SAE",
                    Price = 6299,
                    Description = "65 Hz / Adaptive Sync / G-SYNC Compatible (DisplayPort) / Freesync Premium / DisplayHDR 400 / Speaker",
                    Image = "aoc1.jpg",
                    CategoryId = 3
                },
                new Product()
                {
                    Id = 6,
                    Name = "Samsung Odyssey G7",
                    Price = 19999,
                    Description = "UHD 4K HDR400 / IPS 8-Bit + FRC / 144Гц / DCI-P3 90% / G-SYNC Compatible / AMD FreeSync Premium Pro / HDMI 2.1 Console Ready / Tizen Smart TV / Wi-Fi / Bluetooth",
                    Image = "samsung2.jpg",
                    CategoryId = 3
                },
                new Product()
                {
                    Id = 7,
                    Name = "Kingston Fury DDR4-3600",
                    Price = 2799,
                    Description = "DDR4-3600 16384MB PC4-28800 (Kit of 2x8192) Beast RGB Special Edition White",
                    Image = "kingston1.jpg",
                    CategoryId = 4
                },
                new Product()
                {
                    Id = 8,
                    Name = "Crucial SODIMM",
                    Price = 729,
                    Description = "DDR4-3200 8192 MB PC4-25600",
                    Image = "crucial1.jpg",
                    CategoryId = 4
                },
                new Product()
                {
                    Id = 9,
                    Name = "AMD Ryzen 5 5600",
                    Price = 5799,
                    Description = "3.5GHz/32MB (100-100000927BOX) sAM4 BOX Socket AM4",
                    Image = "amd1.jpg",
                    CategoryId = 5
                },
                new Product()
                {
                    Id = 10,
                    Name = "Intel Core i5-12400F",
                    Price = 6916,
                    Description = "2.5 GHz / 18 MB (BX8071512400F) s1700 BOX Socket 1700",
                    Image = "intel1.jpg",
                    CategoryId = 5
                },
                new Product()
                {
                    Id = 11,
                    Name = "Asus PCI-Ex GeForce RTX 3060",
                    Price = 15399,
                    Description = "Dual OC V2 LHR 12GB GDDR6 (192bit) (1837/15000) (1 x HDMI, 3 x DisplayPort) (DUAL-RTX3060-O12G-V2)",
                    Image = "asus2.jpg",
                    CategoryId = 6
                },
                new Product()
                {
                    Id = 12,
                    Name = "MSI PCI-Ex GeForce RTX 3060",
                    Price = 15399,
                    Description = "Ventus 2X 12G OC 12GB GDDR6 (192bit) (1807/15000) (HDMI, 3 x DisplayPort) (RTX 3060 VENTUS 2X 12G OC)",
                    Image = "msi1.jpg",
                    CategoryId = 6
                },
                
            };
        }
    }
}
