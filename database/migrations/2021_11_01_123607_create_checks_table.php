<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateChecksTable extends Migration
{
    /**
     * Model name
     * @return array
     */
    protected $arrayModels = [
        'App\Models\Roll',
        'App\Models\Pizza'
    ];
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('checks', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('checkable_id');
            $table->string('checkable_type');
            $table->timestamps();
        });

        for ($i=0; $i < 30; $i++) {
            DB::table('checks')->insert(
                [
                    'checkable_id' => rand(1,3),
                    'checkable_type' => $this->arrayModels[rand(0,1)],
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
        Schema::dropIfExists('checks');
    }
}
