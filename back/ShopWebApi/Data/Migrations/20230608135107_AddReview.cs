using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class AddReview : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(9370),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(5639));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "Categories",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(6580),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(2373));

            migrationBuilder.DropPrimaryKey("PK_AspNetUserTokens", "AspNetUserTokens");
            migrationBuilder.DropPrimaryKey("PK_AspNetUserLogins", "AspNetUserLogins");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "AspNetUserTokens",
                type: "nvarchar(128)",
                maxLength: 128,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");           

            migrationBuilder.AlterColumn<string>(
                name: "LoginProvider",
                table: "AspNetUserTokens",
                type: "nvarchar(128)",
                maxLength: 128,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AlterColumn<string>(
                name: "ProviderKey",
                table: "AspNetUserLogins",
                type: "nvarchar(128)",
                maxLength: 128,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AlterColumn<string>(
                name: "LoginProvider",
                table: "AspNetUserLogins",
                type: "nvarchar(128)",
                maxLength: 128,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddPrimaryKey("PK_AspNetUserTokens", "AspNetUserTokens", new string[] { "UserId", "LoginProvider", "Name" });
            migrationBuilder.AddPrimaryKey("PK_AspNetUserLogins", "AspNetUserLogins", new string[] { "LoginProvider", "ProviderKey" });

            migrationBuilder.CreateTable(
                name: "Reviews",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(type: "nvarchar(max)", maxLength: 4080, nullable: true),
                    Mark = table.Column<int>(type: "int", nullable: false),
                    ProductId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reviews", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reviews_AspNetUsers_ProductId",
                        column: x => x.ProductId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Reviews_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: 1,
                column: "NormalizedName",
                value: "User");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: 2,
                column: "NormalizedName",
                value: "Admin");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(6580));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(6580));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(6580));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(6580));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 5,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(6580));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 6,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(6580));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(9370));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(9370));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(9370));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(9370));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(9370));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 6,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(9370));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 7,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(9370));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 8,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(9370));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 9,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(9370));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 10,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(9370));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 11,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(9370));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 12,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(9370));

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_ProductId",
                table: "Reviews",
                column: "ProductId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Reviews");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(5639),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(9370));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "Categories",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(2373),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(6580));

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "AspNetUserTokens",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(128)",
                oldMaxLength: 128);

            migrationBuilder.AlterColumn<string>(
                name: "LoginProvider",
                table: "AspNetUserTokens",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(128)",
                oldMaxLength: 128);

            migrationBuilder.AlterColumn<string>(
                name: "ProviderKey",
                table: "AspNetUserLogins",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(128)",
                oldMaxLength: 128);

            migrationBuilder.AlterColumn<string>(
                name: "LoginProvider",
                table: "AspNetUserLogins",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(128)",
                oldMaxLength: 128);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: 1,
                column: "NormalizedName",
                value: null);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: 2,
                column: "NormalizedName",
                value: null);

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(2373));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(2373));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(2373));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(2373));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 5,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(2373));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 6,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(2373));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(5639));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(5639));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(5639));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(5639));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(5639));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 6,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(5639));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 7,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(5639));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 8,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(5639));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 9,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(5639));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 10,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(5639));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 11,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(5639));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 12,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 9, 8, 55, 19, DateTimeKind.Utc).AddTicks(5639));
        }
    }
}
