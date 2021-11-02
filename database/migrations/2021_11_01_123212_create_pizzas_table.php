<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreatePizzasTable extends Migration
{
    /**
     * Topping Pizza
     * @return array
     */
    protected $toppings = array(
        ['с сыром', 1199.00],
        ['с колбасой', 3060.00],
        ['с грибами', 2113.00]
    );
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pizzas', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('topping');
            $table->unsignedDecimal('price', 8, 2)->default(0);
            $table->timestamps();
        });

        foreach ($this->toppings as $topping) {
            DB::table('pizzas')->insert(
                [
                    'name' => 'Пицца',
                    'topping' => $topping[0],
                    'price' => $topping[1],
                ]
            );
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pizzas');
    }
}
