using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", maxLength: 4080, nullable: true),
                    IsDelete = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    Image = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValue: new DateTime(2023, 6, 6, 11, 30, 22, 143, DateTimeKind.Utc).AddTicks(2311))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", maxLength: 4080, nullable: true),
                    IsDelete = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    Image = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValue: new DateTime(2023, 6, 6, 11, 30, 22, 143, DateTimeKind.Utc).AddTicks(4983)),
                    Rating = table.Column<double>(type: "float", nullable: false, defaultValue: 0.0),
                    CategoryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Products_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "Description", "Image", "Name" },
                values: new object[,]
                {
                    { 1, "Cool laptops here", "laptop.jpg", "Laptops" },
                    { 2, "Great phones for everyone", "phone.jpg", "Phones" },
                    { 3, "Monitors for all uses", "monitor.jpg", "Monitors" },
                    { 4, "Memory that your computer will enjoy", "ram.jpg", "RAM" },
                    { 5, "Processors smarter than Einstein", "cpu.jpg", "CPU" },
                    { 6, "Best graphics for not only games", "gpu.jpg", "GPU" }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "CategoryId", "Description", "Image", "Name", "Price" },
                values: new object[,]
                {
                    { 1, 1, "Екран 15.6\" IPS (1920x1080) Full HD, матовий / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.15 кг / чорний", "acer1.jpg", "Acer Aspire 7", 28999m },
                    { 2, 1, "Екран 15.6\" IPS (1920x1080) Full HD, матовий / Intel Core i3-1115G4 (3.0 - 4.1 ГГц) / RAM 12 ГБ / SSD 512 ГБ / Intel UHD Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / без ОС / 1.8 кг / сірий", "asus1.jpg", "ASUS Laptop X515EA", 18999m },
                    { 3, 2, "Екран (6.5\", Super AMOLED, 2340x1080) / Mediatek Helio G99 (2 x 2.6 ГГц + 6 x 2.0 ГГц) / основна потрійна камера: 50 Мп + 5 Мп + 2 Мп, фронтальна камера: 13 Мп / RAM2 ГБ вбудованої пам'яті + microSD (до 1 ТБ) / 3G / LTE / GPS / ГЛОНАСС / BDS / підтримка 2х SIM-карток (Nano-SIM) / Android 13 / 5000 мА * год", "samsung1.jpg", "Samsung Galaxy A24", 9499m },
                    { 4, 2, "Екран (6.1\", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / подвійна основна камера: 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 128 ГБ вбудованої пам'яті / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 15", "apple1.jpg", "Apple iPhone 13", 9499m },
                    { 5, 3, "65 Hz / Adaptive Sync / G-SYNC Compatible (DisplayPort) / Freesync Premium / DisplayHDR 400 / Speaker", "aoc1.jpg", "AOC 24G2SAE", 6299m },
                    { 6, 3, "UHD 4K HDR400 / IPS 8-Bit + FRC / 144Гц / DCI-P3 90% / G-SYNC Compatible / AMD FreeSync Premium Pro / HDMI 2.1 Console Ready / Tizen Smart TV / Wi-Fi / Bluetooth", "samsung2.jpg", "Samsung Odyssey G7", 19999m },
                    { 7, 4, "DDR4-3600 16384MB PC4-28800 (Kit of 2x8192) Beast RGB Special Edition White", "kingston1.jpg", "Kingston Fury DDR4-3600", 2799m },
                    { 8, 4, "DDR4-3200 8192 MB PC4-25600", "crucial1.jpg", "Crucial SODIMM", 729m },
                    { 9, 5, "3.5GHz/32MB (100-100000927BOX) sAM4 BOX Socket AM4", "amd1.jpg", "AMD Ryzen 5 5600", 5799m },
                    { 10, 5, "2.5 GHz / 18 MB (BX8071512400F) s1700 BOX Socket 1700", "intel1.jpg", "Intel Core i5-12400F", 6916m },
                    { 11, 6, "Dual OC V2 LHR 12GB GDDR6 (192bit) (1837/15000) (1 x HDMI, 3 x DisplayPort) (DUAL-RTX3060-O12G-V2)", "asus2.jpg", "Asus PCI-Ex GeForce RTX 3060", 15399m },
                    { 12, 6, "Ventus 2X 12G OC 12GB GDDR6 (192bit) (1807/15000) (HDMI, 3 x DisplayPort) (RTX 3060 VENTUS 2X 12G OC)", "msi1.jpg", "MSI PCI-Ex GeForce RTX 3060", 15399m }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Products_CategoryId",
                table: "Products",
                column: "CategoryId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Categories");
        }
    }
}
