using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class AddReviewDate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Reviews",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 8, 17, 5, 10, 427, DateTimeKind.Local).AddTicks(488));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(7561),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(9370));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "Categories",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(4369),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(6580));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(4369));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(4369));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(4369));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(4369));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 5,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(4369));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 6,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(4369));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(7561));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(7561));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(7561));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(7561));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(7561));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 6,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(7561));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 7,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(7561));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 8,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(7561));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 9,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(7561));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 10,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(7561));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 11,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(7561));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 12,
                column: "DateCreated",
                value: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(7561));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Reviews");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(9370),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(7561));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateCreated",
                table: "Categories",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 6, 8, 13, 51, 6, 968, DateTimeKind.Utc).AddTicks(6580),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 6, 8, 14, 5, 10, 421, DateTimeKind.Utc).AddTicks(4369));

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
        }
    }
}
