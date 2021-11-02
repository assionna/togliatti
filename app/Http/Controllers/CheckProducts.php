<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use \App\Models\Check;


class CheckProducts extends Controller
{

    /**
     * Check response
     * @var array
     */
    public $response = array();

    public function __invoke()
    {
        $checks = Check::all()->pop(10);

        foreach ($checks as $check) {
            $checkable = $check->checkable;

            $this->response[] = array(
                '№ чека:' => $check['id'],
                'ID продукта:' => $checkable['id'],
                'Название:' => $checkable['name'],
                'Топпинг:' => $checkable['topping'],
                'Цена:' => $checkable['price'],
            );
        }

        print_r($this->response);
        // return response()->json($this->response);
    }
}
