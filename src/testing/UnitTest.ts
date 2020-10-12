import { Type } from '@angular/compiler';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
// declare var fixture;
// declare var app;

export class UniTest {
    name;
    app;
    constructor(public t: any, public title: string) {

    }

    executeMethod(fn): void {
        // app[fn]();
    }

    testTitleRendering(title): any {
        expect(this.t.title).toEqual(title);
    }
    testFormStatus(form): any {
        expect(this.t[form].valid).toBeFalsy();
    }
    testFormAfterValue(form): any {
        const controls = this.t[form].controls;
        // tslint:disable-next-line: forin
        for (const key in controls) {
            this.t[form].get(key).setValue('sample value');
        }
        expect(this.t[form].valid).toBeTruthy();
    }

    testFormControlForRequiredError(form, formControlName): any {
        expect(this.t[form].get(formControlName).valid).toBeFalsy();
    }
    testFormControlForRequiredErrorAfterValue(form, formControlName): any {
        this.t[form].get(formControlName).setValue('test');
        expect(this.t[form].get(formControlName).valid).toBeTruthy();
    }

    checkMethodReturnType(name, returnType): any {
        const data = this.t[name]();
        expect(typeof data).toEqual(returnType);
    }

}
