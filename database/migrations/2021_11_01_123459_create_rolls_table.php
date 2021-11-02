<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateRollsTable extends Migration
{
    /**
     * Toppings rolls
     * @return array
     */
    protected $toppings = array(
        ['с креветкой', 2600.00],
        ['с лососем', 2300.00],
        ['с угрём', 1600.00]
    );
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rolls', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('topping');
            $table->unsignedDecimal('price', 8, 2)->default(0);
            $table->timestamps();
        });

        foreach ($this->toppings as $topping) {
            DB::table('rolls')->insert(
                [
                    'name' => 'Роллы',
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
        Schema::dropIfExists('rolls');
    }
}
